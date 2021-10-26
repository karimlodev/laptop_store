import react from "react";
import { ProductList } from "../componenant/product";

export class HomePage extends react.Component {

    state = {
        products: [
            {
                id: '1',
                tital: 'Acer AN517-41-R0RZ'
                , price: '$1,671.64'
                , pic: 'https://m.media-amazon.com/images/I/81HgnNiQTuL._AC_SX569_.jpg',
                desc: `AMD Ryzen 7 5800H Mobile Processor (8-core/16-thread, 20MB cache, up to 4.4 GHz max boost) | Windows 10 Home
                17.3" Full HD (1920 x 1080) Widescreen LED-backlit IPS Display with 144Hz Refresh Rate | 16:9 aspect ratio
                NVIDIA GeForce RTX 3060 Laptop GPU with 6 GB of dedicated GDDR6 VRAM with NVIDIA DLSS | NVIDIA Resizable BAR | NVIDIA Dynamic Boost 2.0 | NVIDIA GPU Boost
                16GB DDR4 3200MHz Memory | 1TB NVMe SSD (2 x PCIe M.2 Slots - 1 Slot Open for Easy Upgrades) & 1 - Available 2.5" Hard Drive Bay
                Wireless: Intel Wireless Wi-Fi 6 AX200 802.11ax Dual-Band 2.4GHz and 5GHz featuring 2x2 MU-MIMO technology (Max Speed up to 2.4Gbps) | LAN: Killer Ethernet E2600 Gigabit Ethernet LAN | Bluetooth 5.1
                4- Zone RGB Backlit Keyboard | Acer CoolBoost Technology with Twin Fans and Dual Exhaust Ports`
            },
            {
                id: '2',
                tital: 'Acer AN517-41-R0RZ'
                , price: '$1,671.64'
                , pic: 'https://m.media-amazon.com/images/I/81HgnNiQTuL._AC_SX569_.jpg',
                desc: `AMD Ryzen 7 5800H Mobile Processor (8-core/16-thread, 20MB cache, up to 4.4 GHz max boost) | Windows 10 Home
                17.3" Full HD (1920 x 1080) Widescreen LED-backlit IPS Display with 144Hz Refresh Rate | 16:9 aspect ratio
                NVIDIA GeForce RTX 3060 Laptop GPU with 6 GB of dedicated GDDR6 VRAM with NVIDIA DLSS | NVIDIA Resizable BAR | NVIDIA Dynamic Boost 2.0 | NVIDIA GPU Boost
                16GB DDR4 3200MHz Memory | 1TB NVMe SSD (2 x PCIe M.2 Slots - 1 Slot Open for Easy Upgrades) & 1 - Available 2.5" Hard Drive Bay
                Wireless: Intel Wireless Wi-Fi 6 AX200 802.11ax Dual-Band 2.4GHz and 5GHz featuring 2x2 MU-MIMO technology (Max Speed up to 2.4Gbps) | LAN: Killer Ethernet E2600 Gigabit Ethernet LAN | Bluetooth 5.1
                4- Zone RGB Backlit Keyboard | Acer CoolBoost Technology with Twin Fans and Dual Exhaust Ports`
            },
            {
                id: '3',
                tital: 'Acer AN517-41-R0RZ'
                , price: '$1,671.64'
                , pic: 'https://m.media-amazon.com/images/I/81HgnNiQTuL._AC_SX569_.jpg',
                desc: `AMD Ryzen 7 5800H Mobile Processor (8-core/16-thread, 20MB cache, up to 4.4 GHz max boost) | Windows 10 Home
                17.3" Full HD (1920 x 1080) Widescreen LED-backlit IPS Display with 144Hz Refresh Rate | 16:9 aspect ratio
                NVIDIA GeForce RTX 3060 Laptop GPU with 6 GB of dedicated GDDR6 VRAM with NVIDIA DLSS | NVIDIA Resizable BAR | NVIDIA Dynamic Boost 2.0 | NVIDIA GPU Boost
                16GB DDR4 3200MHz Memory | 1TB NVMe SSD (2 x PCIe M.2 Slots - 1 Slot Open for Easy Upgrades) & 1 - Available 2.5" Hard Drive Bay
                Wireless: Intel Wireless Wi-Fi 6 AX200 802.11ax Dual-Band 2.4GHz and 5GHz featuring 2x2 MU-MIMO technology (Max Speed up to 2.4Gbps) | LAN: Killer Ethernet E2600 Gigabit Ethernet LAN | Bluetooth 5.1
                4- Zone RGB Backlit Keyboard | Acer CoolBoost Technology with Twin Fans and Dual Exhaust Ports`
            },
            {
                id: '4',
                tital: 'Acer AN517-41-R0RZ'
                , price: '$1,671.64'
                , pic: 'https://m.media-amazon.com/images/I/81HgnNiQTuL._AC_SX569_.jpg',
                desc: `AMD Ryzen 7 5800H Mobile Processor (8-core/16-thread, 20MB cache, up to 4.4 GHz max boost) | Windows 10 Home
                17.3" Full HD (1920 x 1080) Widescreen LED-backlit IPS Display with 144Hz Refresh Rate | 16:9 aspect ratio
                NVIDIA GeForce RTX 3060 Laptop GPU with 6 GB of dedicated GDDR6 VRAM with NVIDIA DLSS | NVIDIA Resizable BAR | NVIDIA Dynamic Boost 2.0 | NVIDIA GPU Boost
                16GB DDR4 3200MHz Memory | 1TB NVMe SSD (2 x PCIe M.2 Slots - 1 Slot Open for Easy Upgrades) & 1 - Available 2.5" Hard Drive Bay
                Wireless: Intel Wireless Wi-Fi 6 AX200 802.11ax Dual-Band 2.4GHz and 5GHz featuring 2x2 MU-MIMO technology (Max Speed up to 2.4Gbps) | LAN: Killer Ethernet E2600 Gigabit Ethernet LAN | Bluetooth 5.1
                4- Zone RGB Backlit Keyboard | Acer CoolBoost Technology with Twin Fans and Dual Exhaust Ports`
            },
            {
                id: '5',
                tital: 'Acer AN517-41-R0RZ'
                , price: '$1,671.64'
                , pic: 'https://m.media-amazon.com/images/I/81HgnNiQTuL._AC_SX569_.jpg',
                desc: `AMD Ryzen 7 5800H Mobile Processor (8-core/16-thread, 20MB cache, up to 4.4 GHz max boost) | Windows 10 Home
                17.3" Full HD (1920 x 1080) Widescreen LED-backlit IPS Display with 144Hz Refresh Rate | 16:9 aspect ratio
                NVIDIA GeForce RTX 3060 Laptop GPU with 6 GB of dedicated GDDR6 VRAM with NVIDIA DLSS | NVIDIA Resizable BAR | NVIDIA Dynamic Boost 2.0 | NVIDIA GPU Boost
                16GB DDR4 3200MHz Memory | 1TB NVMe SSD (2 x PCIe M.2 Slots - 1 Slot Open for Easy Upgrades) & 1 - Available 2.5" Hard Drive Bay
                Wireless: Intel Wireless Wi-Fi 6 AX200 802.11ax Dual-Band 2.4GHz and 5GHz featuring 2x2 MU-MIMO technology (Max Speed up to 2.4Gbps) | LAN: Killer Ethernet E2600 Gigabit Ethernet LAN | Bluetooth 5.1
                4- Zone RGB Backlit Keyboard | Acer CoolBoost Technology with Twin Fans and Dual Exhaust Ports`
            },
            {
                id: '6',
                tital: 'Acer AN517-41-R0RZ'
                , price: '$1,671.64'
                , pic: 'https://m.media-amazon.com/images/I/81HgnNiQTuL._AC_SX569_.jpg',
                desc: `AMD Ryzen 7 5800H Mobile Processor (8-core/16-thread, 20MB cache, up to 4.4 GHz max boost) | Windows 10 Home
                17.3" Full HD (1920 x 1080) Widescreen LED-backlit IPS Display with 144Hz Refresh Rate | 16:9 aspect ratio
                NVIDIA GeForce RTX 3060 Laptop GPU with 6 GB of dedicated GDDR6 VRAM with NVIDIA DLSS | NVIDIA Resizable BAR | NVIDIA Dynamic Boost 2.0 | NVIDIA GPU Boost
                16GB DDR4 3200MHz Memory | 1TB NVMe SSD (2 x PCIe M.2 Slots - 1 Slot Open for Easy Upgrades) & 1 - Available 2.5" Hard Drive Bay
                Wireless: Intel Wireless Wi-Fi 6 AX200 802.11ax Dual-Band 2.4GHz and 5GHz featuring 2x2 MU-MIMO technology (Max Speed up to 2.4Gbps) | LAN: Killer Ethernet E2600 Gigabit Ethernet LAN | Bluetooth 5.1
                4- Zone RGB Backlit Keyboard | Acer CoolBoost Technology with Twin Fans and Dual Exhaust Ports`
            }
        ]
    };


    render() {
        return <ProductList products={this.state.products} />
    }
}