import {logo} from "../assets/index.js";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3"><img src={logo} alt="sumz logo" className="w-28 object-contain" /><button className="black_btn" type="button" onClick={() => window.open('/')}>GitHub</button></nav>
  <h1 className="head_text">Summarize Articles with <br className="max-md:hidden"/> <span className="orange_gradient">OpenAI GPT04</span></h1>
        <h2 className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti deserunt dignissimos distinctio enim nemo perferendis, perspiciatis provident quaerat quibusdam quis sapiente suscipit velit? Facere odio placeat quaerat repellendus totam.</h2>
    </header>
  );
};
export default Hero;
