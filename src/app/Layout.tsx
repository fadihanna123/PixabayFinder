import PhotosList from 'containers/PhotosList';
import SearchForm from 'containers/SearchFormComp';
import Footer from 'inc/Footer';
import { Container } from 'styles';

const Layout: React.FC = () => (
    <Container m={10} textAlign="center">
        <h1 data-sal="flip-left">PixaBay Finder</h1>
        <SearchForm />
        <PhotosList />
        <Footer />
    </Container>
);

export default Layout;
