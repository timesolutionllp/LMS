import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Divider } from "@nextui-org/react";
import Geeks from "../../Icons/geeks"
import { IoPrintOutline } from "react-icons/io5";
export default function InvoiceDetails() {
    return (
        <div>
            <div className="flex justify-between">
                <Geeks />
                <IoPrintOutline className="text-3xl" />
            </div>
            <div className="flex justify-between mt-10">
                <div>
                    <p>Invoice From</p>
                    <p>Darlene Wilson</p>
                    <p>
                        4333 Edwards Rd
                        undefined Erie, Oklahoma
                        14355 United States
                    </p>
                    <p>
                        INVOICED ID
                        #1001
                    </p>
                </div>
                <div>
                    <p>Invoice To</p>
                    <p>Jorge Fisher</p>
                    <p>
                        775 Rolling Green Rd
                        undefined Orange, Oklahoma
                        45785 United States
                    </p>
                    <p>
                        Due Date
                        20 April 2020
                    </p>
                </div>
            </div>
            <div className="p-4">
                <Table>
                    <TableHeader>
                        <TableColumn>Item</TableColumn>
                        <TableColumn>Quntity</TableColumn>
                        <TableColumn>Unit Price</TableColumn>
                        <TableColumn>Amount</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Monthly (1 Jan,2020 to 1 Feb, 2020)</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>
                                $39.00

                                <div className="mt-10">
                                    <p className="p-2">Total</p>
                                    <p className="p-2">Net Amount</p>
                                    <p className="p-2">Tax*</p>
                                    <Divider />
                                    <p className="p-2">Grand Total</p>
                                </div>
                            </TableCell>
                            <TableCell>$39.00
                                <div className="mt-10">
                                    <p className="p-2">$39.00</p>
                                    <p className="p-2">$37.00</p>
                                    <p className="p-2">$2.00</p>
                                    <Divider />
                                    <p className="p-2">$475.50</p>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

