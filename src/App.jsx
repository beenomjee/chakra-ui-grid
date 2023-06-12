import { useEffect, useState } from "react"
import { Loader, Pagination } from "./componenets";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import styled from "@emotion/styled";
import axios from "axios";


const getImages = async () => {
  const requests = [];
  for (let i = 0; i < 100; i++) {
    requests.push(axios.get('https://source.unsplash.com/200x200/?nature,water,sky,sun,moon,earth,jupiter,america,pakistan,man,boy', {
      responseType: 'blob'
    }));
  }
  const responses = await Promise.all(requests);
  return responses;
}


const Container = styled(Box)(() => ({
  width: 'min(1200px, 95vw)',
  margin: '0 auto',
  padding: "30px",
}))

const Image = styled('img')(() => ({
  objectFit: 'cover',
  borderRadius: '5px',
}));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setImgs([]);
        const responses = await getImages();
        for (const response of responses) {
          const { data } = response;
          const fileReader = new FileReader();
          fileReader.onload = () => {
            setImgs(p => [...p, fileReader.result])
          }
          fileReader.readAsDataURL(data);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        console.log('Something went wrong. Please try again!');
        setIsLoading(false);
      }
    })();
  }, [pageNo])

  return (
    isLoading ? (
      <Loader />
    ) : (
      <Container>
        <Grid gap={2} templateColumns="repeat(12, 1fr)">
          {
            imgs.map((img, i) => (
              <GridItem key={i} colSpan={{ base: 6, sm: 4, md: 3, lg: 2 }}>
                <Image src={img} alt="Image not found!" />
              </GridItem>
            ))
          }
        </Grid>
        <Pagination page={pageNo} count={20} setPage={setPageNo} />
      </Container>
    )
  )
}

export default App