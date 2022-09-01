import styles from "./Pagination.module.css";

type PropsType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  paginationMaxSize: number;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onChangePage: (page: number) => void;
};

export function Pagination(props: PropsType) {
  const totalPages = Math.ceil(props.totalCount / props.pageSize);
  const maxPaginationElements =
    totalPages > props.paginationMaxSize ? props.paginationMaxSize : totalPages;
  const centralElement = Math.ceil((maxPaginationElements + 1) / 2);
  const startPage =
    props.currentPage <= centralElement
      ? 1
      : props.currentPage - centralElement + 1;
  const maxEndPage = startPage + maxPaginationElements - 1;
  const endPage = maxEndPage > totalPages ? totalPages : maxEndPage;
  const hasToStartButton = startPage !== 1;
  const hasNextButton = endPage !== totalPages;

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => {
    const pageNumber = i + startPage;
    const classNameString = [
      styles.listItem,
      ...(props.currentPage === pageNumber ? [styles.activeListItem] : []),
    ].join(" ");

    return (
      <li
        key={pageNumber}
        className={classNameString}
        onClick={() => props.onChangePage(pageNumber)}
      >
        {pageNumber}
      </li>
    );
  });

  const classNameString = [
    styles.listContainer,
    ...(props.className ? [props.className] : []),
  ].join(" ");

  return (
    <>
      {pages.length > 1 && (
        <ul className={classNameString}>
          {hasToStartButton && (
            <li
              className={`${styles.listItem} ${styles.button}`}
              onClick={() => props.onChangePage(1)}
            >
              To begin
            </li>
          )}
          {pages}
          {hasNextButton && (
            <li
              className={`${styles.listItem} ${styles.button}`}
              onClick={() => props.onChangePage(props.currentPage + 1)}
            >
              Next
            </li>
          )}
        </ul>
      )}
    </>
  );
}
