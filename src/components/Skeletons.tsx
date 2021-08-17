import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Skeleton } from './index';

interface SkeletonProps {
    id: number;
}

let skeletonsObject: Array<SkeletonProps> = [];
for (let i = 0; i < 5; i++) {
    skeletonsObject.push({ id: i });
}

const Skeletons = () => {
    return (
        <ScrollView
            style={{ flex: 1, }}
            contentContainerStyle={styles.container}
        >
            {skeletonsObject.map((elem: any) => {
                return (
                    <Skeleton key={elem.id} />
                )
            })}
        </ScrollView>
    )
}

export default Skeletons

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "center",
    }
})
