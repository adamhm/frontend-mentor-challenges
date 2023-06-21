import thankYouIcon from "@assets/images/icon-thank-you.svg";

function Step5() {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <img src={thankYouIcon} alt="" />
            <h1 className="mb-[0.2em] mt-[1em] text-[2em] font-bold text-marine-blue">
                Thank you!
            </h1>
            <p className="text-center text-[17px] text-gray-400">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </p>
        </div>
    );
}

export default Step5;
