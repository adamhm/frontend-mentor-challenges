import { Region } from "@typedefs";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "@api";
import countryComparer from "@shared/country-comparer";

function useHomeContent(region: Region | null, searchTerm: string) {
    const {
        data = [],
        isError,
        isLoading,
    } = useQuery({
        queryKey: [
            {
                type: "countries",
                region: searchTerm.trim() ? null : region,
                searchTerm: searchTerm.trim(),
            },
        ],
        queryFn: getCountries,
        select: (countries) => countries.sort(countryComparer),
    });

    return { data, isError, isLoading };
}

export default useHomeContent;
