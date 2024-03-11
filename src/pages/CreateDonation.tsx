import DonationsForm from "@/components/forms/DonationsForm";
import FormSubmit from "@/components/forms/FormSubmit";
import FormWrapper from "@/components/forms/FormWrapper";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const CreateDonation = () => {
  const [loading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      // Ensure 'amount' is a number
      const amountAsNumber = Number(data?.amount);

      const res = await axios.post(
        "https://givers-heaven-server.vercel.app/api/v1/donations/create-donation",
        { ...data, amount: amountAsNumber }
      );

      if (res?.data?.success === true) {
        setIsLoading(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Donation has been added!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      } else {
        throw new Error("Failed to add donation. Please try again later.");
      }
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "An error occurred",
        text: error?.message || "Something went wrong.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section className="my-20 space-y-10">
      <div className="text-center">
        <h3>Add a Donation</h3>
        <p>Please fill out the form below to add a new donation.</p>
      </div>

      <FormWrapper
        className="w-[90%] md:w-[70%] lg:w-1/2 mx-auto space-y-5"
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        {/* form  */}
        <DonationsForm register={register} errors={errors} />

        {/* form submit */}
        <FormSubmit loading={loading} title="Submit" />
      </FormWrapper>
    </section>
  );
};

export default CreateDonation;
