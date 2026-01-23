
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Availability() {
    const schedule = [
        { day: "Monday", morning: false, afternoon: true, evening: true },
        { day: "Tuesday", morning: true, afternoon: true, evening: false },
        { day: "Wednesday", morning: false, afternoon: false, evening: true },
        { day: "Thursday", morning: true, afternoon: true, evening: false },
        { day: "Friday", morning: true, afternoon: false, evening: false },
    ];

    const Status = ({ available }: { available: boolean }) => (
        available ?
            <div className="flex justify-center"><Check className="h-5 w-5 text-brand-primary" /></div> :
            <div className="flex justify-center"><span className="h-1.5 w-1.5 rounded-full bg-neutral-200"></span></div>
    );

    return (
        <section id="availability" className="py-16 bg-white">
            <div className="container max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-brand-primary mb-10">Availability</h2>

                <Card className="overflow-hidden border-brand-soft/50 shadow-sm">
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-brand-soft/30">
                                <TableRow>
                                    <TableHead className="w-[150px] font-semibold text-brand-primary">Day</TableHead>
                                    <TableHead className="text-center font-semibold text-foreground">Morning <span className="text-xs font-normal text-muted-foreground block">(9am - 12pm)</span></TableHead>
                                    <TableHead className="text-center font-semibold text-foreground">Afternoon <span className="text-xs font-normal text-muted-foreground block">(12pm - 5pm)</span></TableHead>
                                    <TableHead className="text-center font-semibold text-foreground">Evening <span className="text-xs font-normal text-muted-foreground block">(5pm - 8pm)</span></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {schedule.map((slot) => (
                                    <TableRow key={slot.day} className="hover:bg-brand-soft/10">
                                        <TableCell className="font-medium">{slot.day}</TableCell>
                                        <TableCell><Status available={slot.morning} /></TableCell>
                                        <TableCell><Status available={slot.afternoon} /></TableCell>
                                        <TableCell><Status available={slot.evening} /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <div className="mt-6 flex justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-primary" />
                        <span>Spaces Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-200"></span>
                        <span>Fully Booked / Unavailable</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
