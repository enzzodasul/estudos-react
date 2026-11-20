export function ProductCard() {
    return (
        <div>
            <img
                src=""
                alt=""
            />

            <div>
                <h2>NOME DO PRODUTO</h2>
                <P>Descrição do produto</P>
                <p> R$1.568,00 </p>
            </div>
            <div>
                <button>Ver Detalhes</button>

                <button>
                    {' '}
                    <Heart />{' '}
                </button>
            </div>
        </div>
    );
}
