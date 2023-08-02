import { useQuery } from "@tanstack/react-query";
import { getCountry, getCountryNames } from "@api";

function useCountryDetails(countryCode: string) {
    const {
        data: country = null,
        isError: isCountryError,
        isLoading: isCountryLoading,
    } = useQuery({
        queryKey: [{ type: "fullInfo", countryCode }],
        queryFn: getCountry,
        select: (countries) => countries[0],
    });

    const {
        data: borders = [],
        isError: isBordersError,
        isLoading: isBordersLoading,
    } = useQuery({
        queryKey: [{ type: "borders", countryCodes: country?.borders }],
        queryFn: getCountryNames,
        enabled: !!country,
    });

    return {
        country,
        isCountryError,
        isCountryLoading,
        borders,
        isBordersError,
        isBordersLoading,
    };
}

export default useCountryDetails;
