// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation } from "@tanstack/react-query";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";
// import { apiRequest } from "@/lib/queryClient";
// // import { insertInquirySchema, regions, type InsertInquiry } from "@shared/schema";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   CheckCircle2,
//   Loader2,
//   MessageSquare,
//   Shield,
//   Gift,
// } from "lucide-react";

// const benefits = [
//   { icon: Gift, text: "무료 입지 분석 리포트 제공" },
//   { icon: Shield, text: "개인정보 철저히 보호" },
//   { icon: Clock, text: "24시간 이내 담당자 연락" },
// ];

// const contactInfo = [
//   { icon: Phone, label: "전화 상담", value: "070-7721-0466", href: "tel:070-7721-0466" },
//   { icon: Mail, label: "이메일", value: "help@wizley.co.kr", href: "mailto:help@wizley.co.kr" },
//   { icon: MapPin, label: "본사", value: "경기도 용인시 기흥구 공세로 150-29, 비01-엔46호(공세동)", href: "#" },
//   { icon: Clock, label: "상담 시간", value: "평일 09:00 - 18:00", href: "#" },
// ];

// export function InquirySection() {
//   const { toast } = useToast();
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const form = useForm<InsertInquiry>({
//     resolver: zodResolver(insertInquirySchema),
//     defaultValues: {
//       name: "",
//       phone: "",
//       region: "",
//       landSize: null,
//       message: "",
//     },
//   });

//   // const mutation = useMutation({
//   //   mutationFn: async (data: InsertInquiry) => {
//   //     const response = await apiRequest("POST", "/api/inquiries", data);
//   //     return response;
//   //   },
//   //   onSuccess: () => {
//   //     setIsSubmitted(true);
//   //     form.reset();
//   //     toast({
//   //       title: "상담 신청이 완료되었습니다",
//   //       description: "담당자가 빠른 시일 내에 연락드리겠습니다.",
//   //     });
//   //   },
//   //   onError: (error) => {
//   //     toast({
//   //       title: "상담 신청에 실패했습니다",
//   //       description: error instanceof Error ? error.message : "잠시 후 다시 시도해주세요.",
//   //       variant: "destructive",
//   //     });
//   //   },
//   // });

//   // const onSubmit = (data: InsertInquiry) => {
//   //   const cleanedData = {
//   //     ...data,
//   //     landSize: data.landSize && !isNaN(Number(data.landSize)) ? Number(data.landSize) : null,
//   //     message: data.message || null,
//   //   };
//   //   mutation.mutate(cleanedData);
//   // };

//   return (
//     <section
//       id="inquiry"
//       className="py-24 md:py-32 bg-primary"
//       data-testid="section-inquiry"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
//             Inquiry
//           </Badge>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
//             무료 창업 상담 신청
//           </h2>
//           <p className="text-lg text-white/80 max-w-2xl mx-auto">
//             무인세차 창업에 관심이 있으시다면 지금 바로 상담을 신청하세요.
//             <br className="hidden sm:block" />
//             전문 컨설턴트가 맞춤형 솔루션을 제안해 드립니다.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
//           <div className="lg:col-span-2 space-y-8">
//             <div className="space-y-4">
//               {benefits.map((benefit, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center gap-3 text-white/90"
//                   data-testid={`benefit-${idx}`}
//                 >
//                   <div className="p-2 rounded-lg bg-white/10">
//                     <benefit.icon className="w-5 h-5" />
//                   </div>
//                   <span>{benefit.text}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="h-px bg-white/20" />

//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold text-white">다른 문의 방법</h3>
//               <div className="space-y-3">
//                 {contactInfo.map((info, idx) => (
//                   <a
//                     key={idx}
//                     href={info.href}
//                     className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
//                     data-testid={`contact-info-${idx}`}
//                   >
//                     <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
//                       <info.icon className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <div className="text-xs text-white/60">{info.label}</div>
//                       <div className="text-sm font-medium">{info.value}</div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <Card className="lg:col-span-3 border-0 shadow-2xl">
//             {isSubmitted ? (
//               <CardContent className="p-8 md:p-10 flex flex-col items-center justify-center min-h-[400px] text-center">
//                 <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
//                   <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">상담 신청 완료!</h3>
//                 <p className="text-muted-foreground mb-6 max-w-sm">
//                   담당자가 24시간 이내에 연락드릴 예정입니다.
//                   <br />
//                   빠른 상담을 원하시면 전화로 문의해주세요.
//                 </p>
//                 <Button
//                   variant="outline"
//                   onClick={() => {
//                     setIsSubmitted(false);
//                     form.reset();
//                   }}
//                   data-testid="button-new-inquiry"
//                 >
//                   새로운 상담 신청
//                 </Button>
//               </CardContent>
//             ) : (
//               <>
//                 <CardHeader className="pb-4">
//                   <CardTitle className="flex items-center gap-2">
//                     <MessageSquare className="w-5 h-5 text-primary" />
//                     상담 신청서
//                   </CardTitle>
//                   <CardDescription>
//                     아래 정보를 입력해주시면 전문 상담사가 연락드립니다.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="pt-0">
//                   <Form {...form}>
//                     <form
//                       className="space-y-5"
//                       data-testid="form-inquiry"
//                     >
//                       <div className="grid sm:grid-cols-2 gap-4">
//                         <FormField
//                           control={form.control}
//                           name="name"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>이름 *</FormLabel>
//                               <FormControl>
//                                 <Input
//                                   placeholder="홍길동"
//                                   {...field}
//                                   data-testid="input-name"
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                         <FormField
//                           control={form.control}
//                           name="phone"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>연락처 *</FormLabel>
//                               <FormControl>
//                                 <Input
//                                   placeholder="010-1234-5678"
//                                   {...field}
//                                   data-testid="input-phone"
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                       </div>

//                       <div className="grid sm:grid-cols-2 gap-4">
//                         <FormField
//                           control={form.control}
//                           name="region"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>창업 희망 지역 *</FormLabel>
//                               <Select
//                                 onValueChange={field.onChange}
//                                 defaultValue={field.value}
//                               >
//                                 <FormControl>
//                                   <SelectTrigger data-testid="select-region">
//                                     <SelectValue placeholder="지역 선택" />
//                                   </SelectTrigger>
//                                 </FormControl>
//                                 <SelectContent>
//                                   {/* {regions.map((region) => (
//                                     <SelectItem key={region} value={region}>
//                                       {region}
//                                     </SelectItem>
//                                   ))} */}
//                                 </SelectContent>
//                               </Select>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                         <FormField
//                           control={form.control}
//                           name="landSize"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>보유 부지 평수 (선택)</FormLabel>
//                               <FormControl>
//                                 <Input
//                                   type="number"
//                                   placeholder="예: 100"
//                                   {...field}
//                                   value={field.value ?? ""}
//                                   onChange={(e) =>
//                                     field.onChange(
//                                       e.target.value ? parseInt(e.target.value) : null
//                                     )
//                                   }
//                                   data-testid="input-land-size"
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                       </div>

//                       <FormField
//                         control={form.control}
//                         name="message"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>문의 내용 (선택)</FormLabel>
//                             <FormControl>
//                               <Textarea
//                                 placeholder="궁금하신 사항이나 요청 사항을 자유롭게 적어주세요."
//                                 className="min-h-[120px] resize-none"
//                                 {...field}
//                                 value={field.value ?? ""}
//                                 data-testid="textarea-message"
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />

//                       <Button
//                         type="submit"
//                         size="lg"
//                         className="w-full bg-accent hover:bg-accent/90 text-accent-foreground border-accent-border"
//                         disabled={mutation.isPending}
//                         data-testid="button-submit-inquiry"
//                       >
//                         {mutation.isPending ? (
//                           <>
//                             <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                             전송 중...
//                           </>
//                         ) : (
//                           <>
//                             <Phone className="w-4 h-4 mr-2" />
//                             무료 상담 신청하기
//                           </>
//                         )}
//                       </Button>

//                       <p className="text-xs text-center text-muted-foreground">
//                         상담 신청 시{" "}
//                         <a href="#" className="underline hover:text-foreground">
//                           개인정보 처리방침
//                         </a>
//                         에 동의하는 것으로 간주됩니다.
//                       </p>
//                     </form>
//                   </Form>
//                 </CardContent>
//               </>
//             )}
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }
