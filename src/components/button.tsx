import { Button as ButtonNativeBase, IIconButtonProps, Text} from "native-base";

type Props = IIconButtonProps & {
    title: string;
}

export function Button({ title, ...rest } : IIconButtonProps) {
    return(
        <ButtonNativeBase 
            w='full'
            h={16}
            bgColor={"#149f42"}
            { ...rest }
            _pressed={{
                bgColor: 'green.700',
            }}
        >
            <Text color={'#fff'} fontWeight={'bold'} fontSize={'md'}>
                {title}
            </Text>
        </ButtonNativeBase>
    )
}

