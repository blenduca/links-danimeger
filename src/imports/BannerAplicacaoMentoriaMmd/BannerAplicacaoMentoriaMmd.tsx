import imgImage from "./16c40010854cb6eadf958e3b96c7eb1656b328f2.png";

function Container() {
  return <div className="absolute bg-[#cfa456] blur-[150px] left-[486px] opacity-10 rounded-[16777200px] size-[600px] top-0" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[#cfa456] blur-[120px] left-0 opacity-5 rounded-[16777200px] size-[500px] top-[268px]" data-name="Container" />;
}

function Button() {
  return (
    <div className="bg-gradient-to-b drop-shadow-[0px_0px_15px_rgba(207,164,86,0.4)] from-[#cfa456] h-[52px] relative rounded-[8px] shrink-0 to-[#cfa456] via-1/2 via-[#e5c075] w-[251.258px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5c075] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[calc(50%-65.63px)] not-italic text-[18px] text-black top-[12px] tracking-[-0.4395px] whitespace-nowrap">Descubra agora</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[30px] top-[106px] w-[686px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[48px] text-white tracking-[0.3516px] w-[600px]">
        <span className="leading-[79.4000015258789%]">{`Deixa eu ser sua gerente financeira pessoal `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[79.4000015258789%] text-black">por 30 minutos</span>
        <span className="leading-[79.4000015258789%]">{` e te mostrar como sair das dividas.`}</span>
      </p>
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-y-1/2 absolute h-[608px] left-[31px] top-[calc(50%+0.5px)] w-[1038px]" data-name="Container">
      <Container3 />
      <div className="absolute left-[676px] size-[480px] top-[-39px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[150.06%] left-0 max-w-none top-[-5.12%] w-full" src={imgImage} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-r from-[#cfa456] from-[5.274%] h-[422px] left-[675px] to-[88.397%] to-[rgba(207,164,86,0)] top-[10px] w-[169px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[737px] left-0 overflow-clip top-[-72px] w-[1145px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 74.723%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(207, 164, 86) 0%, rgb(207, 164, 86) 100%)" }} data-name="Section">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

export default function BannerAplicacaoMentoriaMmd() {
  return (
    <div className="bg-[#2b6c70] overflow-clip relative rounded-[32px] size-full" data-name="Banner - Aplicação Mentoria MMD">
      <Section />
    </div>
  );
}