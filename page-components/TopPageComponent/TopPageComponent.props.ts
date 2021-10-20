import { TopLevelCategory, TopPageModal } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

export interface TopPagePropsComponent {
	firstCategory: TopLevelCategory;
	page: TopPageModal;
	products: ProductModel[];
}
