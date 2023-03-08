package main

import (
	"fmt"
	"os"
	"runtime"

	"github.com/spf13/cobra"
)

// APIVersion increases every time a new call is added to the API. Clients should use this info
// to determine if the server supports specific features.
const APIVersion = "v1.0.0"

// Default build-time variable.
// These values are overridden via ldflags
var (
	Version = "unknown-version"
)

func commandVersion() *cobra.Command {
	return &cobra.Command{
		Use:   "version",
		Short: "Print the version and exit",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Printf(`permit-be Version: %s API Version: %s Go Version: %s Go OS/ARCH: %s %s `, Version, APIVersion, runtime.Version(), runtime.GOOS, runtime.GOARCH)
		},
	}
}

var verbose bool

func commandRoot() *cobra.Command {
	rootCmd := &cobra.Command{
		Use: "run",
		Run: func(cmd *cobra.Command, args []string) {
			_ = cmd.Help()
			os.Exit(2)
		},
	}

	rootCmd.PersistentFlags().BoolVarP(&verbose, "verbose", "v", false, "verbose output")

	rootCmd.AddCommand(commandVersion())
	return rootCmd
}

func main() {
	if err := commandRoot().Execute(); err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(2)
	}
}
