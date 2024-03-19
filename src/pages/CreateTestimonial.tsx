import FormSubmit from "@/components/forms/FormSubmit";
import FormWrapper from "@/components/forms/FormWrapper";
import TestimonialForm from "@/components/forms/TestimonialForm";
import { useAddTestimonialMutation } from "@/redux/services/api";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateTestimonial = () => {
  const [addTestimonial, { isLoading }] = useAddTestimonialMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await addTestimonial(data); // Attempt to add the data
      // Now, you must check if the response includes the 'data' property
      if ("data" in response && response.data) {
        // Since we've confirmed 'data' exists, we can use it safely here
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: response.data?.message, // Adjusted for nested data
          showConfirmButton: false,
          timer: 1500,
        });
      } else if ("error" in response) {
        // Handle error case
        console.error(response.error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Submission Error",
          text: "Your submission could not be processed.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
      // Additional error handling, perhaps more specific than above
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "An unexpected error occurred",
        text: "Please try again later.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <main className="my-20 space-y-10">
      <div className="text-center">
        <h3>Add a Testimonial</h3>
        <p>Please fill out the form below to submit your testimonial.</p>
      </div>

      <FormWrapper
        className="w-[90%] md:w-[70%] lg:w-1/2 mx-auto space-y-5"
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        {/* form  */}
        <TestimonialForm register={register} errors={errors} />

        {/* form submit */}
        <FormSubmit loading={isLoading} title="Submit" />
      </FormWrapper>
    </main>
  );
};

export default CreateTestimonial;
