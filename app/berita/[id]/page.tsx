import { beritaData1 } from "@/data/berita";
type props = Promise<{
  id: number
}>;
const BeritaDetailPage  = async(props: props) =>{
  // const {id} = params;
  const resolvedProps = await props;
  console.log(resolvedProps.id);
  const berita = beritaData1.find((news) => news.id === 1);
  // console.log(berita);
  return (
    <>
    Selamat datang di halaman detail berita<br/>
    judul: {berita?.nama}<br/>
    isi: {berita?.isi}
    </>
  );
}
export default BeritaDetailPage
