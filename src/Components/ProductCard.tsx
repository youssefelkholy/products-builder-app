interface Iprops {

}
import Image from "./Image";
import { IProduct } from "./interfaces";
import Button from "./ui/Button";
import { textSlicer } from "./utils/functions";
interface Iprops {
    product: IProduct;
}

const ProductCard = ( { product }: Iprops ) => {
    const { title, description, imageURL, price, category } = product;

    return (
        <div className="flex flex-col max-w-sm p-2 mx-auto text-lg border rounded-md border-slate-300 md:max-w-lg md:mx-0">
            <Image imageURL={ imageURL } alt="Product Name" className="w-full rounded-md h-52 lg:object-cover" />
            <h3 className="mt-2 text-lg font-bold capitalize">{ textSlicer( title, 25 ) }</h3>
            <p className="text-sm text-left capitalize">
                { textSlicer( description ) }
            </p>
            <div className="flex items-center my-4 space-x-2">
                <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"></span>
                <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"></span>
                <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"></span>
            </div>
            <div className="flex items-center justify-between">
                <span className="font-bold text-blue-800">${ price }</span>
                <div className="flex items-center space-x-2">
                    <Image imageURL={ category.imageURL } alt={ category.name } className="object-bottom w-10 h-10 rounded-full" />
                    <span className="font-bold text-black">Cars</span>
                </div>
            </div>
            <div className="flex items-center justify-between mt-5 space-x-2">
                <Button className="bg-indigo-700" width="w-full">Edit</Button>
                <Button className="bg-red-700" width="w-full">Delete</Button>
            </div>
        </div >
    );
};

export default ProductCard;