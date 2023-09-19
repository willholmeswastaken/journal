import { Editor } from 'novel';

export default function NewJournalPage() {
    return (
        <main className='container'>
            <Editor defaultValue='bun dev' className='relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg text-black' />
        </main>
    )
}