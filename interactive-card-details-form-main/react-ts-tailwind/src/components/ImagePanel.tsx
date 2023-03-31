function ImagePanel() {
    return (
        <section
            className="relative shrink-0 grow basis-0 bg-main-desktop bg-no-repeat"
            aria-hidden="true"
        >
            <div className="bg-image-card-front bg-image absolute left-[164px] top-[187px] h-[245pc] w-[447px] bg-image-front bg-position-front px-8 pb-0 pt-[140px] uppercase text-card-front [background-repeat:no-repeat,no-repeat]">
                <div
                    id="card_number"
                    className="min-h-[36px] text-[1.75rem] leading-[normal] tracking-[0.2rem]"
                >
                    0000 0000 0000 0000
                </div>
                <div className="flex pt-7 text-[14px] leading-[normal] tracking-[0.125rem]">
                    <div id="card_name">Jane Appleseed</div>
                    <div id="card_expiration" className="ml-auto">
                        00/00
                    </div>
                </div>
            </div>
            <div className="absolute left-[256px] top-[470px] h-[245px] w-[447px] bg-image-card-back bg-no-repeat text-card-back">
                <div
                    id="card_cvc"
                    className="relative left-[357px] top-[110px] max-w-[50px] text-[0.875rem] leading-[normal]"
                >
                    000
                </div>
            </div>
        </section>
    );
}

export default ImagePanel;
