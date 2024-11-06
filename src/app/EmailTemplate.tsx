type Params = {
  email: string;
  name: string;
};
function EmailTemplate({ email, name }: Params) {
  return (
    <div>
      <h1>Hi, {name} 👋🏻</h1>

      <pre>
        Welcome to the resend club, this is a test for Youtube Video. •‿•
      </pre>
    </div>
  );
}

export default EmailTemplate;
