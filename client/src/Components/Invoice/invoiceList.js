import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue,Chip } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
const rows = [
    {
        key: "1",
        orderId: "#1008",
        date: "17 April 2020, 10:45pm",
        amount: "39",
        status: "Due",

    },
    {
        key: "1",
        orderId: "#1008",
        date: "17 April 2020, 10:45pm",
        amount: "39",
        status: "Complete",

    },
    {
        key: "1",
        orderId: "#1008",
        date: "17 April 2020, 10:45pm",
        amount: "39",
        status: "Complete",

    },
    {
        key: "1",
        orderId: "#1008",
        date: "17 April 2020, 10:45pm",
        amount: "39",
        status: "Complete",
        
    },

];


export default function InvoiceList() {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <h2 className="text-2xl font-bold">Invoices</h2>
                <p>You can find all of your order Invoices.</p>
            </div>
            <Table aria-label="Example table with dynamic content">
                <TableHeader>
                    <TableColumn>OrderId</TableColumn>
                    <TableColumn>Date</TableColumn>
                    <TableColumn>Amount</TableColumn>
                    <TableColumn>Status</TableColumn>
                    <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No record Found"}>
                    {
                        rows.map((x,index) => {
                            return <TableRow key={x.key}>
                                <TableCell className="text-blue-400 cursor-pointer" onClick={() => navigate("?invoiceId=" + x.orderId)}>{x.orderId}</TableCell>
                                <TableCell>{x.date}</TableCell>
                                <TableCell>{x.amount}</TableCell>
                                <TableCell>{x.status === "Due" ? <Chip color="danger">Due</Chip> : <Chip color="success">Complete</Chip> }</TableCell>
                                <TableCell><MdOutlineFileDownload className="text-xl"/></TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </>
    )
}