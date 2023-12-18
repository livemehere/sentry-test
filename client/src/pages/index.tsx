import YFLogo from "@public/yf-logo.svg";

export default function Index() {
  return (
    <div>
      <img src="/yf-logo.svg" alt="" />
      <img src={YFLogo.src} alt="" />
    </div>
  );
}
