import { FallingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return <LoaderWrapper>
    <FallingLines
      color="#ae62e1"
      width="100"
      visible={true}
      ariaLabel='falling-lines-loading'
    />
  </LoaderWrapper>
};

export default Loader;