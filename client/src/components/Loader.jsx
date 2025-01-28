export default function Loader({loaderMsg}) {
    return (
        <div class="flex items-center justify-center h-full w-full flex-col">
            <div class="w-20 h-20 border-2 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
            {loaderMsg && <span className="mt-4 font-semibold">{loaderMsg}</span>}
        </div>
    )
}