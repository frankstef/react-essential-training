export default function Page() {
  async function submitForm(formData) {
    "use server";

    const formFields = {
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("formFields", formFields);
    console.log("TODO:Send these form field values to a backend");
    return formFields;
  }

  return (
    <main className="max-w-md mx-auto p-6 shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6 ">Contact us!</h1>
      <form className="space-y-4" action={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="bg-white"
          ></input>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="bg-white"
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}
