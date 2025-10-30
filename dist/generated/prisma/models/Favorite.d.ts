import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Favorite
 *
 */
export type FavoriteModel = runtime.Types.Result.DefaultSelection<Prisma.$FavoritePayload>;
export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null;
    _avg: FavoriteAvgAggregateOutputType | null;
    _sum: FavoriteSumAggregateOutputType | null;
    _min: FavoriteMinAggregateOutputType | null;
    _max: FavoriteMaxAggregateOutputType | null;
};
export type FavoriteAvgAggregateOutputType = {
    id: number | null;
};
export type FavoriteSumAggregateOutputType = {
    id: number | null;
};
export type FavoriteMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    type: $Enums.Type | null;
    director: string | null;
    budget: string | null;
    location: string | null;
    duration: string | null;
    year: string | null;
    createdAt: Date | null;
};
export type FavoriteMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    type: $Enums.Type | null;
    director: string | null;
    budget: string | null;
    location: string | null;
    duration: string | null;
    year: string | null;
    createdAt: Date | null;
};
export type FavoriteCountAggregateOutputType = {
    id: number;
    title: number;
    type: number;
    director: number;
    budget: number;
    location: number;
    duration: number;
    year: number;
    createdAt: number;
    _all: number;
};
export type FavoriteAvgAggregateInputType = {
    id?: true;
};
export type FavoriteSumAggregateInputType = {
    id?: true;
};
export type FavoriteMinAggregateInputType = {
    id?: true;
    title?: true;
    type?: true;
    director?: true;
    budget?: true;
    location?: true;
    duration?: true;
    year?: true;
    createdAt?: true;
};
export type FavoriteMaxAggregateInputType = {
    id?: true;
    title?: true;
    type?: true;
    director?: true;
    budget?: true;
    location?: true;
    duration?: true;
    year?: true;
    createdAt?: true;
};
export type FavoriteCountAggregateInputType = {
    id?: true;
    title?: true;
    type?: true;
    director?: true;
    budget?: true;
    location?: true;
    duration?: true;
    year?: true;
    createdAt?: true;
    _all?: true;
};
export type FavoriteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: Prisma.FavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Favorites to fetch.
     */
    orderBy?: Prisma.FavoriteOrderByWithRelationInput | Prisma.FavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Favorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType;
};
export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
    [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFavorite[P]> : Prisma.GetScalarType<T[P], AggregateFavorite[P]>;
};
export type FavoriteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FavoriteWhereInput;
    orderBy?: Prisma.FavoriteOrderByWithAggregationInput | Prisma.FavoriteOrderByWithAggregationInput[];
    by: Prisma.FavoriteScalarFieldEnum[] | Prisma.FavoriteScalarFieldEnum;
    having?: Prisma.FavoriteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FavoriteCountAggregateInputType | true;
    _avg?: FavoriteAvgAggregateInputType;
    _sum?: FavoriteSumAggregateInputType;
    _min?: FavoriteMinAggregateInputType;
    _max?: FavoriteMaxAggregateInputType;
};
export type FavoriteGroupByOutputType = {
    id: number;
    title: string;
    type: $Enums.Type;
    director: string;
    budget: string;
    location: string;
    duration: string;
    year: string;
    createdAt: Date;
    _count: FavoriteCountAggregateOutputType | null;
    _avg: FavoriteAvgAggregateOutputType | null;
    _sum: FavoriteSumAggregateOutputType | null;
    _min: FavoriteMinAggregateOutputType | null;
    _max: FavoriteMaxAggregateOutputType | null;
};
type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FavoriteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FavoriteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FavoriteGroupByOutputType[P]>;
}>>;
export type FavoriteWhereInput = {
    AND?: Prisma.FavoriteWhereInput | Prisma.FavoriteWhereInput[];
    OR?: Prisma.FavoriteWhereInput[];
    NOT?: Prisma.FavoriteWhereInput | Prisma.FavoriteWhereInput[];
    id?: Prisma.IntFilter<"Favorite"> | number;
    title?: Prisma.StringFilter<"Favorite"> | string;
    type?: Prisma.EnumTypeFilter<"Favorite"> | $Enums.Type;
    director?: Prisma.StringFilter<"Favorite"> | string;
    budget?: Prisma.StringFilter<"Favorite"> | string;
    location?: Prisma.StringFilter<"Favorite"> | string;
    duration?: Prisma.StringFilter<"Favorite"> | string;
    year?: Prisma.StringFilter<"Favorite"> | string;
    createdAt?: Prisma.DateTimeFilter<"Favorite"> | Date | string;
};
export type FavoriteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    director?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _relevance?: Prisma.FavoriteOrderByRelevanceInput;
};
export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.FavoriteWhereInput | Prisma.FavoriteWhereInput[];
    OR?: Prisma.FavoriteWhereInput[];
    NOT?: Prisma.FavoriteWhereInput | Prisma.FavoriteWhereInput[];
    title?: Prisma.StringFilter<"Favorite"> | string;
    type?: Prisma.EnumTypeFilter<"Favorite"> | $Enums.Type;
    director?: Prisma.StringFilter<"Favorite"> | string;
    budget?: Prisma.StringFilter<"Favorite"> | string;
    location?: Prisma.StringFilter<"Favorite"> | string;
    duration?: Prisma.StringFilter<"Favorite"> | string;
    year?: Prisma.StringFilter<"Favorite"> | string;
    createdAt?: Prisma.DateTimeFilter<"Favorite"> | Date | string;
}, "id">;
export type FavoriteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    director?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FavoriteCountOrderByAggregateInput;
    _avg?: Prisma.FavoriteAvgOrderByAggregateInput;
    _max?: Prisma.FavoriteMaxOrderByAggregateInput;
    _min?: Prisma.FavoriteMinOrderByAggregateInput;
    _sum?: Prisma.FavoriteSumOrderByAggregateInput;
};
export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: Prisma.FavoriteScalarWhereWithAggregatesInput | Prisma.FavoriteScalarWhereWithAggregatesInput[];
    OR?: Prisma.FavoriteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FavoriteScalarWhereWithAggregatesInput | Prisma.FavoriteScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Favorite"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Favorite"> | string;
    type?: Prisma.EnumTypeWithAggregatesFilter<"Favorite"> | $Enums.Type;
    director?: Prisma.StringWithAggregatesFilter<"Favorite"> | string;
    budget?: Prisma.StringWithAggregatesFilter<"Favorite"> | string;
    location?: Prisma.StringWithAggregatesFilter<"Favorite"> | string;
    duration?: Prisma.StringWithAggregatesFilter<"Favorite"> | string;
    year?: Prisma.StringWithAggregatesFilter<"Favorite"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Favorite"> | Date | string;
};
export type FavoriteCreateInput = {
    title: string;
    type: $Enums.Type;
    director: string;
    budget: string;
    location: string;
    duration: string;
    year: string;
    createdAt?: Date | string;
};
export type FavoriteUncheckedCreateInput = {
    id?: number;
    title: string;
    type: $Enums.Type;
    director: string;
    budget: string;
    location: string;
    duration: string;
    year: string;
    createdAt?: Date | string;
};
export type FavoriteUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeFieldUpdateOperationsInput | $Enums.Type;
    director?: Prisma.StringFieldUpdateOperationsInput | string;
    budget?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    duration?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FavoriteUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeFieldUpdateOperationsInput | $Enums.Type;
    director?: Prisma.StringFieldUpdateOperationsInput | string;
    budget?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    duration?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FavoriteCreateManyInput = {
    id?: number;
    title: string;
    type: $Enums.Type;
    director: string;
    budget: string;
    location: string;
    duration: string;
    year: string;
    createdAt?: Date | string;
};
export type FavoriteUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeFieldUpdateOperationsInput | $Enums.Type;
    director?: Prisma.StringFieldUpdateOperationsInput | string;
    budget?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    duration?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FavoriteUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeFieldUpdateOperationsInput | $Enums.Type;
    director?: Prisma.StringFieldUpdateOperationsInput | string;
    budget?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    duration?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FavoriteOrderByRelevanceInput = {
    fields: Prisma.FavoriteOrderByRelevanceFieldEnum | Prisma.FavoriteOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type FavoriteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    director?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FavoriteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type FavoriteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    director?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FavoriteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    director?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FavoriteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type FavoriteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    type?: boolean;
    director?: boolean;
    budget?: boolean;
    location?: boolean;
    duration?: boolean;
    year?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["favorite"]>;
export type FavoriteSelectScalar = {
    id?: boolean;
    title?: boolean;
    type?: boolean;
    director?: boolean;
    budget?: boolean;
    location?: boolean;
    duration?: boolean;
    year?: boolean;
    createdAt?: boolean;
};
export type FavoriteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "type" | "director" | "budget" | "location" | "duration" | "year" | "createdAt", ExtArgs["result"]["favorite"]>;
export type $FavoritePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Favorite";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        type: $Enums.Type;
        director: string;
        budget: string;
        location: string;
        duration: string;
        year: string;
        createdAt: Date;
    }, ExtArgs["result"]["favorite"]>;
    composites: {};
};
export type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FavoritePayload, S>;
export type FavoriteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FavoriteCountAggregateInputType | true;
};
export interface FavoriteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Favorite'];
        meta: {
            name: 'Favorite';
        };
    };
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: Prisma.SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FavoriteClient<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FavoriteClient<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: Prisma.SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma.Prisma__FavoriteClient<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FavoriteClient<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     *
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FavoriteFindManyArgs>(args?: Prisma.SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     *
     */
    create<T extends FavoriteCreateArgs>(args: Prisma.SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma.Prisma__FavoriteClient<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: Prisma.SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     *
     */
    delete<T extends FavoriteDeleteArgs>(args: Prisma.SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma.Prisma__FavoriteClient<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FavoriteUpdateArgs>(args: Prisma.SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma.Prisma__FavoriteClient<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: Prisma.SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: Prisma.SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: Prisma.SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma.Prisma__FavoriteClient<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(args?: Prisma.Subset<T, FavoriteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FavoriteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Prisma.Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>;
    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends FavoriteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FavoriteGroupByArgs['orderBy'];
    } : {
        orderBy?: FavoriteGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Favorite model
     */
    readonly fields: FavoriteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Favorite.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Favorite model
 */
export interface FavoriteFieldRefs {
    readonly id: Prisma.FieldRef<"Favorite", 'Int'>;
    readonly title: Prisma.FieldRef<"Favorite", 'String'>;
    readonly type: Prisma.FieldRef<"Favorite", 'Type'>;
    readonly director: Prisma.FieldRef<"Favorite", 'String'>;
    readonly budget: Prisma.FieldRef<"Favorite", 'String'>;
    readonly location: Prisma.FieldRef<"Favorite", 'String'>;
    readonly duration: Prisma.FieldRef<"Favorite", 'String'>;
    readonly year: Prisma.FieldRef<"Favorite", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Favorite", 'DateTime'>;
}
/**
 * Favorite findUnique
 */
export type FavoriteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    /**
     * Filter, which Favorite to fetch.
     */
    where: Prisma.FavoriteWhereUniqueInput;
};
/**
 * Favorite findUniqueOrThrow
 */
export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    /**
     * Filter, which Favorite to fetch.
     */
    where: Prisma.FavoriteWhereUniqueInput;
};
/**
 * Favorite findFirst
 */
export type FavoriteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    /**
     * Filter, which Favorite to fetch.
     */
    where?: Prisma.FavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Favorites to fetch.
     */
    orderBy?: Prisma.FavoriteOrderByWithRelationInput | Prisma.FavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Favorites.
     */
    cursor?: Prisma.FavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Favorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Favorites.
     */
    distinct?: Prisma.FavoriteScalarFieldEnum | Prisma.FavoriteScalarFieldEnum[];
};
/**
 * Favorite findFirstOrThrow
 */
export type FavoriteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    /**
     * Filter, which Favorite to fetch.
     */
    where?: Prisma.FavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Favorites to fetch.
     */
    orderBy?: Prisma.FavoriteOrderByWithRelationInput | Prisma.FavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Favorites.
     */
    cursor?: Prisma.FavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Favorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Favorites.
     */
    distinct?: Prisma.FavoriteScalarFieldEnum | Prisma.FavoriteScalarFieldEnum[];
};
/**
 * Favorite findMany
 */
export type FavoriteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    /**
     * Filter, which Favorites to fetch.
     */
    where?: Prisma.FavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Favorites to fetch.
     */
    orderBy?: Prisma.FavoriteOrderByWithRelationInput | Prisma.FavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Favorites.
     */
    cursor?: Prisma.FavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Favorites.
     */
    skip?: number;
    distinct?: Prisma.FavoriteScalarFieldEnum | Prisma.FavoriteScalarFieldEnum[];
};
/**
 * Favorite create
 */
export type FavoriteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    /**
     * The data needed to create a Favorite.
     */
    data: Prisma.XOR<Prisma.FavoriteCreateInput, Prisma.FavoriteUncheckedCreateInput>;
};
/**
 * Favorite createMany
 */
export type FavoriteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: Prisma.FavoriteCreateManyInput | Prisma.FavoriteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Favorite update
 */
export type FavoriteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    /**
     * The data needed to update a Favorite.
     */
    data: Prisma.XOR<Prisma.FavoriteUpdateInput, Prisma.FavoriteUncheckedUpdateInput>;
    /**
     * Choose, which Favorite to update.
     */
    where: Prisma.FavoriteWhereUniqueInput;
};
/**
 * Favorite updateMany
 */
export type FavoriteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: Prisma.XOR<Prisma.FavoriteUpdateManyMutationInput, Prisma.FavoriteUncheckedUpdateManyInput>;
    /**
     * Filter which Favorites to update
     */
    where?: Prisma.FavoriteWhereInput;
    /**
     * Limit how many Favorites to update.
     */
    limit?: number;
};
/**
 * Favorite upsert
 */
export type FavoriteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: Prisma.FavoriteWhereUniqueInput;
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: Prisma.XOR<Prisma.FavoriteCreateInput, Prisma.FavoriteUncheckedCreateInput>;
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FavoriteUpdateInput, Prisma.FavoriteUncheckedUpdateInput>;
};
/**
 * Favorite delete
 */
export type FavoriteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    /**
     * Filter which Favorite to delete.
     */
    where: Prisma.FavoriteWhereUniqueInput;
};
/**
 * Favorite deleteMany
 */
export type FavoriteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: Prisma.FavoriteWhereInput;
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number;
};
/**
 * Favorite without action
 */
export type FavoriteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Favorite.d.ts.map