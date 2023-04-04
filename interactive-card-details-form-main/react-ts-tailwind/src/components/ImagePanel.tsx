import { BankCard } from "../shared/BankCard";

function ImagePanel({ bankCard }: { bankCard: BankCard }) {
    return (
        <section
            className="relative shrink-0 grow-0 basis-[240px] bg-main-mobile bg-no-repeat md:grow md:basis-0 md:bg-main-desktop"
            aria-hidden="true"
        >
            <div className="absolute left-[16px] top-[121px] z-10 h-[157px] w-[286px] bg-image-front  bg-size-front-mobile bg-position-front-mobile px-[18px] pb-0 pt-[85px] uppercase text-card-front [background-repeat:no-repeat,no-repeat] md:left-[164px] md:top-[187px] md:h-[245px] md:w-[447px] md:bg-position-front md:px-8 md:pt-[140px] md:[background-size:auto]">
                <div
                    id="card_number"
                    className="min-h-[36px] text-[1.05rem] leading-[normal] tracking-[0.2rem] md:text-[1.75rem]"
                >
                    {bankCard.number}
                </div>
                <div className="flex pt-[5px] text-[10px] leading-[normal] tracking-[0.05rem] md:pt-7 md:text-[14px] md:tracking-[0.125rem]">
                    <div id="card_name">{bankCard.name}</div>
                    <div id="card_expiration" className="ml-auto">
                        {`${bankCard.month}/${bankCard.year}`}
                    </div>
                </div>
            </div>
            <div className="absolute left-[73px] top-[32px] h-[157px] w-[286px] bg-image-card-back bg-no-repeat text-card-back [background-size:286px_157px] md:left-[256px] md:top-[470px] md:h-[245px] md:w-[447px] md:[background-size:auto]">
                <div
                    id="card_cvc"
                    className="relative left-[225px] top-[70px] max-w-[50px] text-[10px] leading-[normal] md:left-[357px] md:top-[110px] md:text-[0.875rem]"
                >
                    {bankCard.cvc}
                </div>
            </div>
        </section>
    );
}

export default ImagePanel;
