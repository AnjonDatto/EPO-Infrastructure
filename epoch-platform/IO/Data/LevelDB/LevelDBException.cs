using System.Data.Common;

namespace epo.IO.Data.LevelDB
{
    internal class LevelDBException : DbException
    {
        internal LevelDBException(string message)
            : base(message)
        {
        }
    }
}

