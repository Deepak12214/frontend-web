import React from 'react';

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    showPreviousNext = true,
    maxVisiblePages = 5
}) => {
    if (totalPages <= 1) return null;

    // Calculate visible page numbers
    const getVisiblePages = () => {
        const pages = [];
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // Adjust start if we're near the end
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    const visiblePages = getVisiblePages();

    return (
        <nav className="flex justify-center" aria-label="Pagination">
            <div className="flex items-center gap-2">
                {/* Previous Button */}
                {showPreviousNext && (
                    <button
                        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Previous page"
                    >
                        Previous
                    </button>
                )}

                {/* First page + ellipsis */}
                {visiblePages[0] > 1 && (
                    <>
                        <button
                            onClick={() => onPageChange(1)}
                            className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                        >
                            1
                        </button>
                        {visiblePages[0] > 2 && (
                            <span className="px-2 text-gray-400">...</span>
                        )}
                    </>
                )}

                {/* Page numbers */}
                {visiblePages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === page
                                ? 'bg-(--color-primary) text-white shadow-md'
                                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                        aria-label={`Page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                    >
                        {page}
                    </button>
                ))}

                {/* Last page + ellipsis */}
                {visiblePages[visiblePages.length - 1] < totalPages && (
                    <>
                        {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                            <span className="px-2 text-gray-400">...</span>
                        )}
                        <button
                            onClick={() => onPageChange(totalPages)}
                            className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                        >
                            {totalPages}
                        </button>
                    </>
                )}

                {/* Next Button */}
                {showPreviousNext && (
                    <button
                        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Next page"
                    >
                        Next
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Pagination;
