function RegistrationFormUncontrolled() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" type="text" />
      </label>
      <label>
        Password:
        <input name="password" type="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationFormUncontrolled;
