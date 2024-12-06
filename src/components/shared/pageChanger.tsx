import { useAppDispatch } from "@/store"
import { handleChangeCurrentPage } from "@/store/reviews/reviewsSlice"


export default function PageChanger({ currentPage }: { currentPage: number }) {
    const dispatch = useAppDispatch()

    const handleChangePage = (selectedPage: number) => {
        dispatch(handleChangeCurrentPage({ page: selectedPage }))
    }

    return (
        <div className="flex mx-auto gap-3 mt-10">
            <button onClick={() => handleChangePage(0)} className={`${currentPage == 0 ? "w-[30px] bg-[#A40731]" : "w-[15px] bg-[#E7E5E4]"} h-[5px] rounded-lg`} />
            <button onClick={() => handleChangePage(1)} className={`${currentPage == 1 ? "w-[30px] bg-[#A40731]" : "w-[15px] bg-[#E7E5E4]"} h-[5px] rounded-lg`} />
            <button onClick={() => handleChangePage(2)} className={`${currentPage == 2 ? "w-[30px] bg-[#A40731]" : "w-[15px] bg-[#E7E5E4]"} h-[5px] rounded-lg`} />
        </div>
    )
}