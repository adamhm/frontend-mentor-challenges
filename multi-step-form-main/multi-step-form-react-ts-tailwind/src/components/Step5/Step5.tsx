import { StepContent } from "@components";
import thankYouIcon from "@assets/images/icon-thank-you.svg";

function Step5() {
    return (
        <StepContent>
            <div className="relative top-[-12px] flex h-[370px] flex-col items-center justify-center md:top-[98px]">
                <img
                    src={thankYouIcon}
                    alt=""
                    className="max-w-[56px] md:max-w-[100%]"
                />
                <h1 className="mb-[0.2em] mt-5 text-[24px] font-bold text-marine-blue md:mt-7 md:text-[2em]">
                    Thank you!
                </h1>
                <p className="mx-[-10px] text-center text-[17px] text-gray-400">
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </StepContent>
    );
}

export default Step5;
