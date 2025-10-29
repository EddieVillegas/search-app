type Props = {
    text: string
}

export default function Message({
    text
}: Props) {
    return (
        <div class='p-3 mx-auto mb-5 text-2xl text-center text-white'>
            {text}
        </div>
    )
}