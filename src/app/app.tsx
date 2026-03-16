import { Button } from "@/components/button"
import { ClosedCaptionIcon } from "lucide-react"
import { Input } from "@/components/input"
import { Link } from "@/components/link"

export function App() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>

          <div className="flex gap-4">
            <Button size="sm" color="primary" variant="solid">
              Button
            </Button>
            <Button color="yellow" variant="solid">
              Button
            </Button>
            <Button icon color="green" variant="solid" size="sm">
              <ClosedCaptionIcon />
            </Button>

            <Link href="#" leftIcon={<ClosedCaptionIcon />}>
              Link
            </Link>
          </div>
        </div>

        <Input />
        <div className="text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
