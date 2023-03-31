function CompletedPanel() {
    return (
        <div id="completed" className="mt-[300px] hidden w-[381px] text-center">
            <img src="images/icon-complete.svg" width="82" height="82" alt="" />
            <p className="text-completed-text mb-4 mt-8 text-[28px] uppercase leading-[normal] tracking-[3px]">
                Thank you!
            </p>
            <p className="text-completed-text-2 text-[18px] leading-[normal]">
                We've added your card details
            </p>
            <button
                type="button"
                className="mt-12 h-[53px] w-full rounded-[8px] bg-button text-[18px] leading-[normal] text-button-text"
            >
                Continue
            </button>
        </div>
    );
}

export default CompletedPanel;
