import { Center, CircularProgress } from "@chakra-ui/react"

const Loader = () => {
    return (
        <Center minHeight="100vh">
            <CircularProgress thickness="7px" isIndeterminate color='blue.300' trackColor="transparent" />
        </Center>
    )
}

export default Loader