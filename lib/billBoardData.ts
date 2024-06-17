import { Euler, Vector3 } from "three"

export type Billboard = {
    telepadName: string
    telepadPosition: Vector3
    telepadRotation: Euler
    base3position: Vector3
    base3Scale: number
    board9position: Vector3
    board9Scale: Vector3
    board9Rotation: Euler
    sidescreenPosition: Vector3
    sidescreenScale: Vector3
    sidescreenRotation: Euler
    board001position: Vector3
    board001Scale: Vector3
    board001Rotation: Euler
    board002position: Vector3
    board002Scale: number
    board002Rotation: Euler
    iframeUrl: string
}

export const billboards: Billboard[] = [
    {
        telepadName: "telepad1",
        telepadPosition: new Vector3(17.088, 0, 7.898),
        telepadRotation: new Euler(0, -1.571, 0),
        base3position: new Vector3(0.537, 0.101, 0.821),
        base3Scale: 98.291,
        board9position: new Vector3(18.494, 2.164, 9.71),
        board9Scale: new Vector3(5.627, 5.627, 5.948),
        board9Rotation: new Euler(0),

        sidescreenPosition: new Vector3(17.212, 3.652, 6.108),
        sidescreenScale: new Vector3(4.904, 4.311, 3.377),
        sidescreenRotation: new Euler(-Math.PI, 0.781, -Math.PI),

        board001position: new Vector3(18.33, 3.375, 9.731),
        board001Scale: new Vector3(5.627, 5.627, 5.948),
        board001Rotation: new Euler(0),

        board002position: new Vector3(17.238, 3.65, 6.075),
        board002Scale: 5.532,
        board002Rotation: new Euler(0, Math.PI / 4, 0),

        iframeUrl: "https://bruno-simon.com/html/",
    },
    {
        telepadName: "telepad2",
        telepadPosition: new Vector3(18.27, 0, 16.299),
        telepadRotation: new Euler(0, -1.571, 0),
        base3position: new Vector3(0.537, 0.101, 0.821), //
        base3Scale: 98.291, //
        board9position: new Vector3(19.676, 2.164, 18.111),
        board9Scale: new Vector3(5.627, 5.627, 5.948), //
        board9Rotation: new Euler(0),

        sidescreenPosition: new Vector3(18.394, 3.652, 14.509),
        sidescreenScale: new Vector3(4.904, 4.311, 3.377), //
        sidescreenRotation: new Euler(-Math.PI, 0.781, -Math.PI), //

        board001position: new Vector3(19.512, 3.375, 18.133),
        board001Scale: new Vector3(5.627, 5.627, 5.948), //
        board001Rotation: new Euler(0),

        board002position: new Vector3(18.42, 3.65, 14.476),
        board002Scale: 5.532, //
        board002Rotation: new Euler(0, Math.PI / 4, 0), //

        iframeUrl: "https://bruno-simon.com/html/",
    },
    {
        telepadName: "telepad3",
        telepadPosition: new Vector3(-0.067, 0, -0.063),
        telepadRotation: new Euler(0),
        base3position: new Vector3(0.537, 0.101, 0.821), //
        base3Scale: 98.291, //
        board9position: new Vector3(1.746, 2.164, -1.469),
        board9Scale: new Vector3(5.627, 5.627, 5.948), //
        board9Rotation: new Euler(0, 1.571, 0),

        sidescreenPosition: new Vector3(-1.857, 3.652, -0.187),
        sidescreenScale: new Vector3(4.904, 4.311, 3.377), //
        sidescreenRotation: new Euler(Math.PI, -0.79, Math.PI), //same other dif here

        board001position: new Vector3(1.767, 3.375, -1.305),
        board001Scale: new Vector3(5.627, 5.627, 5.948), //
        board001Rotation: new Euler(0, 1.571, 0), //

        board002position: new Vector3(-1.89, 3.65, -0.213),
        board002Scale: 5.532, //
        board002Rotation: new Euler(-Math.PI, Math.PI / 4, -Math.PI), //same other ont here

        iframeUrl: "https://bruno-simon.com/html/",
    },
    {
        telepadName: "telepad4",
        telepadPosition: new Vector3(-7.952, 0, 1.823),
        telepadRotation: new Euler(0),
        base3position: new Vector3(0.537, 0.101, 0.821), //
        base3Scale: 98.291, //
        board9position: new Vector3(-6.139, 2.164, 0.417),
        board9Scale: new Vector3(5.627, 5.627, 5.948), //
        board9Rotation: new Euler(0, 1.571, 0),

        sidescreenPosition: new Vector3(-9.742, 3.652, 1.699),
        sidescreenScale: new Vector3(4.904, 4.311, 3.377), //
        sidescreenRotation: new Euler(Math.PI, -0.79, Math.PI), //same other dif here

        board001position: new Vector3(-6.118, 3.375, 0.581),
        board001Scale: new Vector3(5.627, 5.627, 5.948), //
        board001Rotation: new Euler(0, 1.571, 0), //

        board002position: new Vector3(-9.775, 3.65, 1.673),
        board002Scale: 5.532, //
        board002Rotation: new Euler(-Math.PI, Math.PI / 4, -Math.PI), //same other ont here

        iframeUrl: "https://bruno-simon.com/html/",
    },
    {
        telepadName: "telepad5",
        telepadPosition: new Vector3(8.045, 0, -2.328),
        telepadRotation: new Euler(0),
        base3position: new Vector3(0.537, 0.101, 0.821), //
        base3Scale: 98.291, //
        board9position: new Vector3(9.857, 2.164, -3.734),
        board9Scale: new Vector3(5.627, 5.627, 5.948), //
        board9Rotation: new Euler(0, 1.571, 0),

        sidescreenPosition: new Vector3(6.255, 3.652, -2.452),
        sidescreenScale: new Vector3(4.904, 4.311, 3.377), //
        sidescreenRotation: new Euler(Math.PI, -0.79, Math.PI), //same other dif here

        board001position: new Vector3(9.879, 3.375, -3.57),
        board001Scale: new Vector3(5.627, 5.627, 5.948), //
        board001Rotation: new Euler(0, 1.571, 0), //

        board002position: new Vector3(6.222, 3.65, -2.478),
        board002Scale: 5.532, //
        board002Rotation: new Euler(-Math.PI, Math.PI / 4, -Math.PI), //same other ont here

        iframeUrl: "https://bruno-simon.com/html/",
    },
    {
        telepadName: "telepad6",
        telepadPosition: new Vector3(14.955, 0, -0.654),
        telepadRotation: new Euler(0, -1.571, 0),
        base3position: new Vector3(0.537, 0.101, 0.821), //
        base3Scale: 98.291, //
        board9position: new Vector3(16.361, 2.164, 1.159),
        board9Scale: new Vector3(5.627, 5.627, 5.948), //
        board9Rotation: new Euler(0),

        sidescreenPosition: new Vector3(15.079, 3.652, -2.444),
        sidescreenScale: new Vector3(4.904, 4.311, 3.377), //
        sidescreenRotation: new Euler(-Math.PI, 0.781, -Math.PI), //same other dif here

        board001position: new Vector3(16.197, 3.375, 1.18),
        board001Scale: new Vector3(5.627, 5.627, 5.948), //
        board001Rotation: new Euler(0), //

        board002position: new Vector3(15.106, 3.65, -2.477),
        board002Scale: 5.532, //
        board002Rotation: new Euler(-Math.PI, Math.PI / 4, -Math.PI), //same other ont here

        iframeUrl: "https://bruno-simon.com/html/",
    },
]
