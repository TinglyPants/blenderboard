export default function SizeHelper(property, sizeArray) {
    // sm:property-[sizeArray[0]]
    // md:property-[sizeArray[1]]
    // lg:property-[sizeArray[2]]
    // xl:property-[sizeArray[3]]
    // 2xl:property-[sizeArray[4]]
    // If there is no, say, sizeArray[3], then use the last value.
    let smallVal = `sm:${property}-[${sizeArray[0]}] `;
    let mediumVal = `md:${property}-[${
        sizeArray[1] ? sizeArray[1] : sizeArray[sizeArray.length - 1]
    }] `;
    let largeVal = `lg:${property}-[${
        sizeArray[2] ? sizeArray[2] : sizeArray[sizeArray.length - 1]
    }] `;
    let extraLargeVal = `xl:${property}-[${
        sizeArray[3] ? sizeArray[3] : sizeArray[sizeArray.length - 1]
    }] `;
    let extraExtraLargeVal = `2xl:${property}-[${
        sizeArray[4] ? sizeArray[4] : sizeArray[sizeArray.length - 1]
    }] `;

    return smallVal + mediumVal + largeVal + extraLargeVal + extraExtraLargeVal;
}
