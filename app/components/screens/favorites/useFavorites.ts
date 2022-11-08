import { useCallback, useEffect, useMemo, useState } from 'react';
import { IPlace } from './../../../types/plcae';
import { sanityClient } from './../../../sanity';
import { queries } from '@/components/queries';
import { useSession } from 'next-auth/react';


export const useFavorites = (plaseId: string) => {
    const [favorites, setFavorites] = useState([])
    const [currentFavoriteId, setCurrentFavoriteId] = useState<string>('')
    const { data } = useSession()
    const [isLoading, setIsloading] = useState(false)

    useEffect(() => {
        sanityClient.fetch(queries.getFavorites(data?.user?.email || '')).then((data) => {
            setFavorites(data.places)
            setCurrentFavoriteId(data?._id)
        })
    }, [data])

    const checkFavorite = useCallback((_id: string) => favorites?.some(fav => fav._id === _id), [favorites])


    const addToFavorites = useCallback(async () => {
        await sanityClient
            .patch(currentFavoriteId)
            .setIfMissing({ places: [] })
            .append('places', [{
                _ref: plaseId,
                type: 'reference'
            }])
            .commit()
    }, [currentFavoriteId])

    const removeFromFavorites = useCallback(async () => {
        await sanityClient
            .delete(currentFavoriteId)
    }, [currentFavoriteId])


    const toggleFavorite = useCallback(async () => {
        setIsloading(true)
        if (checkFavorite(plaseId)) {
            await removeFromFavorites()
        } else {
            await addToFavorites()
        }
        setIsloading(false)
    }, [currentFavoriteId])

    return useMemo(() => ({
        favorites,
        checkFavorite,
        toggleFavorite,
        isLoading
    }), [favorites, checkFavorite, toggleFavorite, isLoading])
}