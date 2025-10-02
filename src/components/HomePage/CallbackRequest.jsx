import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
const schema = z.object({
  fullname: z.string().min(1, "Ihr Name ist erforderlich"),
  phone: z
    .string()
    .regex(/^\d+$/, "Telefonnummer darf nur Ziffern enthalten")
    .min(10, "Telefonnummer muss mindestens 10 Ziffern enthalten"),
});

const CallbackRequest = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Determine the API base URL dynamically
  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL // Local backend
      : import.meta.env.VITE_API_BASE_URL_RENDER; // Render backend

  // Define the mutation function
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(
        `${apiBaseUrl}/api/send-home-consultation-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok)
        throw new Error("Rückrufanfrage konnte nicht gesendet werden.");
      return response.json();
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccessMessage(null);

    try {
      // Validate form data using zod schema
      const validatedData = schema.parse(formData);

      // Use mutation for API call
      await mutation.mutateAsync(validatedData);

      setSuccessMessage("Rückrufanfrage erfolgreich versendet!");
      setFormData({
        fullname: "",
        phone: "",
      });
    } catch (error) {
      if (error.errors) {
        const validationErrors = {};
        error.errors.forEach((err) => {
          validationErrors[err.path[0]] = err.message;
        });
        setErrors(validationErrors);
      } else {
        setErrors({ form: "Ein unerwarteter Fehler ist aufgetreten." });
      }
    } finally {
      setIsLoading(false);
    }
  };
useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
       // reset after showing (optional)
    }
  }, [successMessage]);

  useEffect(() => {
    if (errors.form) {
      toast.error(errors);
       // reset after showing (optional)
    }
  }, [errors.form]);
  // return (
  //   <section className="bg-primary/90 py-6 px-4 lg:px-7 border-t-2 border-secondary/90 text-white">
  //    <Toaster
  //     position="bottom-right"
  //     reverseOrder={false}
  //     toastOptions={{
  //       duration: 4000,
  //       style: {
  //         background: "#144647",
  //         color: "white", // slate-800
  //         padding: "12px 16px",
  //         borderRadius: "8px",
  //         fontSize: "14px",
  //         boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  //       },
  //       success: {
  //         iconTheme: {
  //           primary: "#144647", // green-500
  //           secondary: "white",
  //         },
  //       },
  //       error: {
  //         style: {
  //           background: "#FEE2E2", // red-100
  //           color: "#B91C1C", // red-700
  //         },
  //         iconTheme: {
  //           primary: "#EF4444", // red-500
  //           secondary: "#fff",
  //         },
  //       },
  //     }} 
  //     /> 
  //     <form className="flex flex-col lg:flex-row" onSubmit={handleSubmit}>
  //       <div className="flex-1">
  //         <p className="text-white/90 ml-3 lg:ml-0 font-medium whitespace-nowrap text-left lg:text-right">
  //           Wir rufen Sie gerne zurück:
  //         </p>
  //         <div className="min-h-[1.25rem] mt-1 "></div>
  //       </div>

  //       <div className="flex-1 px-4 mb-1 lg:mb-0">
  //         <Input
  //           type="text"
  //           name="fullname"
  //           placeholder="Ihr Name*"
  //           value={formData.fullname}
  //           onChange={handleChange}
  //           className="search-input text-white mb-5 lg:mb-0 "
  //         />
  //         {/* {errors.fullname && (
  //           <p className="text-red-500 text-sm mt-1 items-center">
  //             {errors.fullname}
  //           </p>
  //         )} */}

  //         <div className="min-h-[1.25rem] mt-1">
  //           {errors.fullname && (
  //             <p
  //               className="text-red-500 whitespace-nowrap text-xs"
  //               role="alert"
  //             >
  //               {errors.fullname}
  //             </p>
  //           )}
  //         </div>
  //       </div>
  //       <div className="flex-1 px-4">
  //         <Input
  //           type="tel"
  //           name="phone"
  //           placeholder="Telefonnummer*"
  //           value={formData.phone}
  //           onChange={handleChange}
  //           className="search-input text-white"
  //         />
  //         {/* {errors.phone && (
  //           <p className="text-red-500 text-sm mt-1 items-center">
  //             {errors.phone}
  //           </p>
  //         )} */}
  //         <div className="min-h-[1.25rem] mt-1">
  //           {errors.phone && (
  //             <p
  //               className="text-red-500 whitespace-nowrap text-xs"
  //               role="alert"
  //             >
  //               {errors.phone}
  //             </p>
  //           )}
  //         </div>
  //       </div>

  //       <div className="flex-1 -mt-0 lg:-mt-1  ml-1 lg:ml-0">
  //         <Button
  //           type="submit"
  //           disabled={isLoading}
  //           className="bg-secondary/90 text-white px-4 py-2 rounded-2xl hover:bg-slate-500 transition duration-300"
  //         >
  //           {isLoading ? "Senden..." : "Rückruf anfordern"}
  //         </Button>
  //         <div className="min-h-[1.25rem] mt-1 hidden lg:block "></div>
  //       </div>
  //        {/* {successMessage && toast.success(successMessage)}  */}
  //     </form>
  //     {/* {successMessage && (
  //       <p className="text-green-500 text-sm items-center">
  //         {successMessage}
  //       </p>
  //     )}
  //     {errors.form && (
  //       <p className="text-red-500 text-sm items-center">{errors.form}</p>
  //     )} */}
  //   </section>
  // );
};

export default CallbackRequest;
