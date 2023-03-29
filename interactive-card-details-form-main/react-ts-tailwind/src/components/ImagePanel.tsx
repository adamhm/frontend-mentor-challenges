function ImagePanel() {
    return (
        <section>
            <div>
                <div id="card_number">0000 0000 0000 0000</div>
                <div>
                    <div id="card_name">Jane Appleseed</div>
                    <div
                        id="card_expiration"
                        className="card__image__front__expiration"
                    >
                        00/00
                    </div>
                </div>
            </div>
            <div>
                <div id="card_cvc">000</div>
            </div>
        </section>
    );
}

export default ImagePanel;
