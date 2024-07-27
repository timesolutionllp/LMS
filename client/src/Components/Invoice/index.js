import { useSearchParams } from "react-router-dom";
import InvoiceList from "./invoiceList";
import InvoiceDetails from "./invoiceDetails";

export default function Invoice() {
    let [searchParams, setSearchParams] = useSearchParams();
    return <div>
        {
            searchParams.get('invoiceId')!==null?<InvoiceDetails/>:< InvoiceList/>
        }
    </div>
}