import DonationsForm from "@/components/forms/DonationsForm";
import FormSubmit from "@/components/forms/FormSubmit";
import FormWrapper from "@/components/forms/FormWrapper";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAddDonationMutation } from "@/redux/services/api";
import { useEffect } from "react";

const CreateDonation = () => {
  const [addData, { isSuccess, isLoading, error }] = useAddDonationMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // Ensure 'amount' is a number
    const amountAsNumber = Number(data?.amount);

    // Insert data to the database
    await addData({ ...data, amount: amountAsNumber });
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Donation has been added!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "An error occurred",
        text: "Something went wrong.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [isSuccess, error, reset]);

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
        <FormSubmit loading={isLoading} title="Submit" />
      </FormWrapper>
    </section>
  );
};

export default CreateDonation;
