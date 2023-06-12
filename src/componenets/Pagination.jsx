import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Button, Center, HStack, IconButton } from "@chakra-ui/react"


const Elipsis = () => {
    return (
        <Button size={{ base: "xs", sm: "md" }} isDisabled disabled colorScheme="blue" variant="ghost">...</Button>
    )
}

const PageNo = ({ changePage, page, pageNo, }) => {
    return (
        <Button size={{ base: "xs", sm: "md" }} data-value={pageNo} onClick={changePage} colorScheme="blue" variant={page === pageNo ? "solid" : "ghost"}>{pageNo}</Button>
    )

}
const Pagination = ({ page, count, setPage }) => {
    const changePage = e => {
        const newPageNo = Number(e.target.dataset.value);
        setPage(p => p !== newPageNo ? newPageNo : p);
    }

    const previousPage = () => {
        setPage(page - 1);
    };

    const nextPage = () => {
        setPage(page + 1);
    };
    return (
        <Center mt={5}>
            <HStack spacing={1}>
                <IconButton size={{ base: "xs", sm: "md" }} onClick={previousPage} isDisabled={page === 1} colorScheme="blue" variant="outline" aria-label='Previous Page' icon={<ChevronLeftIcon />} />
                {
                    page <= 4 ? (
                        <>
                            <PageNo changePage={changePage} page={page} pageNo={1} />
                            <PageNo changePage={changePage} page={page} pageNo={2} />
                            <PageNo changePage={changePage} page={page} pageNo={3} />
                            <PageNo changePage={changePage} page={page} pageNo={4} />
                            <PageNo changePage={changePage} page={page} pageNo={5} />
                            <Elipsis />
                            <PageNo changePage={changePage} page={page} pageNo={count} />
                        </>
                    ) : page >= count - 3 ? (
                        <>
                            <PageNo changePage={changePage} page={page} pageNo={1} />
                            <Elipsis />
                            <PageNo changePage={changePage} page={page} pageNo={count - 4} />
                            <PageNo changePage={changePage} page={page} pageNo={count - 3} />
                            <PageNo changePage={changePage} page={page} pageNo={count - 2} />
                            <PageNo changePage={changePage} page={page} pageNo={count - 1} />
                            <PageNo changePage={changePage} page={page} pageNo={count} />
                        </>
                    ) : (
                        <>
                            <PageNo changePage={changePage} page={page} pageNo={1} />
                            <Elipsis />
                            <PageNo changePage={changePage} page={page} pageNo={page - 1} />
                            <PageNo changePage={changePage} page={page} pageNo={page} />
                            <PageNo changePage={changePage} page={page} pageNo={page + 1} />
                            <Elipsis />
                            <PageNo changePage={changePage} page={page} pageNo={count} />
                        </>
                    )
                }
                <IconButton size={{ base: "xs", sm: "md" }} onClick={nextPage} isDisabled={page === count} colorScheme="blue" variant="outline" aria-label='Next Page' icon={<ChevronRightIcon />} />
            </HStack>
        </Center>
    )
}

export default Pagination