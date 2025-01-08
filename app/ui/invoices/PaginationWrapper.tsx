import { fetchInvoicesPages } from "@/app/lib/data";
import Pagination from "@/app/ui/invoices/pagination";

export default async function PaginationWrapper({ query }: { query: string }) {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	const totalPages = await fetchInvoicesPages(query);
	return <Pagination totalPages={totalPages} />;
}
