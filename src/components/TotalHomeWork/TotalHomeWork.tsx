type Props = {
    total: number
    currencyType: string
    exchangeRate: number
}
const TotalHomeWork = ({ exchangeRate, total, currencyType }: Props) => {
    return (
        <div>
            Total: {(total * exchangeRate).toFixed(2)} {currencyType}
        </div>
    )
}
export default TotalHomeWork
