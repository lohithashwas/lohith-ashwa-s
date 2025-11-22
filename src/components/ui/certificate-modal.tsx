import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Maximize2 } from "lucide-react"

interface CertificateModalProps {
    imageSrc: string
    altText: string
    trigger: React.ReactNode
}

export function CertificateModal({ imageSrc, altText, trigger }: CertificateModalProps) {
    if (!imageSrc) {
        return <>{trigger}</>
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-full bg-black/95 border-neutral-800 p-2 overflow-hidden">
                <DialogTitle className="sr-only">Certificate View</DialogTitle>
                <div className="relative w-full h-[85vh]">
                    <Image
                        src={imageSrc}
                        alt={altText}
                        fill
                        className="object-contain"
                        quality={100}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}
