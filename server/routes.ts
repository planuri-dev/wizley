import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      
      res.status(201).json({
        success: true,
        message: "상담 신청이 접수되었습니다.",
        data: inquiry,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "입력값이 올바르지 않습니다.",
          errors: validationError.details,
        });
      } else {
        console.error("Error creating inquiry:", error);
        res.status(500).json({
          success: false,
          message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
        });
      }
    }
  });

  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json({
        success: true,
        data: inquiries,
      });
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({
        success: false,
        message: "서버 오류가 발생했습니다.",
      });
    }
  });

  app.get("/api/inquiries/:id", async (req, res) => {
    try {
      const inquiry = await storage.getInquiry(req.params.id);
      if (!inquiry) {
        res.status(404).json({
          success: false,
          message: "해당 상담 신청을 찾을 수 없습니다.",
        });
        return;
      }
      res.json({
        success: true,
        data: inquiry,
      });
    } catch (error) {
      console.error("Error fetching inquiry:", error);
      res.status(500).json({
        success: false,
        message: "서버 오류가 발생했습니다.",
      });
    }
  });

  return httpServer;
}
