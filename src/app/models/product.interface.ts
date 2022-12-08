import {CategoryModel} from "./category.interface"

export interface ProductModel {

id: number,
title: string,
price: number,
description: string,
images:string[],
category:CategoryModel

}