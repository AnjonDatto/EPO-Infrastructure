using epo.SmartContract;
using System;

namespace epo.Core
{
    public class BlockNotifyEventArgs : EventArgs
    {
        public Block Block { get; }
        public NotifyEventArgs[] Notifications { get; }

        public BlockNotifyEventArgs(Block block, NotifyEventArgs[] notifications)
        {
            this.Block = block;
            this.Notifications = notifications;
        }
    }
}
l